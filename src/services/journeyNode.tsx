import * as React from "react";

export class JourneyNode {
  public static getJourneyNodeFromMarkdownHtml(journeyHtml: string): React.ReactNode {
    if (!journeyHtml) {
      return undefined;
    }

    const returnNodes: React.ReactNode[] = [];

    try {
      const domParser = new DOMParser();
      const htmlDOM = domParser.parseFromString(journeyHtml, "text/html");

      const unProcessedSiblingImageElements: Element[] = [];
      let lightBoxNumber = 1;
      for (let i = 0; i < htmlDOM.body.children.length; i++) {
        const htmlElement = htmlDOM.body.children[i];
        const imageElements = this.getImagesFromImageContainer(htmlElement);
        if (!imageElements || imageElements.length === 0) {
          if (unProcessedSiblingImageElements.length > 0) {
            returnNodes.push(this.getLightBoxForImages(unProcessedSiblingImageElements, lightBoxNumber));
            unProcessedSiblingImageElements.length = 0;
            lightBoxNumber++;
          }
        } else {
          unProcessedSiblingImageElements.push(...imageElements);
          continue;
        }

        returnNodes.push(this.getNonImageNode(htmlElement));
      }

      if (unProcessedSiblingImageElements.length > 0) {
        returnNodes.push(this.getLightBoxForImages(unProcessedSiblingImageElements, lightBoxNumber));
      }
    } catch (e) {
      console.log(e);
    }

    return <>{returnNodes}</>;
  }

  private static getLightBoxForImages(imageElements: Element[], lightBoxNumber: number): React.ReactNode {
    const returnElements = [];
    for (const imageElement of imageElements) {
      const altAttribute = imageElement.attributes.getNamedItem("alt");
      let text = "Light Box";
      if (altAttribute) {
        text = altAttribute.value;
      }
      returnElements.push(<div>{`${lightBoxNumber}: ${text}`}</div>);
    }
    return returnElements;
  }

  private static getNonImageNode(htmlElement: Element) {
    return <div dangerouslySetInnerHTML={{ __html: htmlElement.outerHTML }}></div>;
  }

  private static getImagesFromImageContainer(htmlElement: Element): Element[] | undefined {
    const tagName = htmlElement.tagName;

    const imageElementsList: Element[] = [];

    switch (tagName.toLowerCase()) {
      case "img":
        return undefined;
        imageElementsList.push(htmlElement);
        break;
      case "p":
        for (let i = 0; i < htmlElement.children.length; i++) {
          const htmlChildElement = htmlElement.children[i];
          if (htmlChildElement.tagName.toLowerCase() === "img") {
            imageElementsList.push(htmlChildElement);
          }
        }
        break;
      default:
        return undefined;
    }

    return imageElementsList;
  }
}

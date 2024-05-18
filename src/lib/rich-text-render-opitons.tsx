import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-blue-500"> {children} </span>
);
const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">
    <span className="text-4xl md:text-6xl font-bold text-white">
      {" "}
      {children}{" "}
    </span>{" "}
  </div>
);

const Heading2 = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">
    <span className="text-3xl md:text-5xl font-bold text-white">
      {" "}
      {children}{" "}
    </span>{" "}
  </div>
);
const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">
    <p> {children} </p>{" "}
  </div>
);

const HyperLink = ({
  node,
  children,
}: {
  node: Record<string, any>;
  children: React.ReactNode;
}) => {
  const URI = node["data.url"];
  return (
    <span className="text-4xlx md:text-6xlx text-blue-200 font-bold">
      {" "}
      <a href={URI} target="_blank" rel="noreferrer">
        {" "}
        {/* {URI} */} {children}{" "}
      </a>{" "}
    </span>
  );
};
const CustomView = () => {
  return <></>;
};

const richtextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold> {text} </Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (
      node: Record<string, any>,
      children: React.ReactNode
    ) => {
      return <Heading1> {children} </Heading1>;
    },
    [BLOCKS.HEADING_2]: (
      node: Record<string, any>,
      children: React.ReactNode
    ) => {
      return <Heading2> {children} </Heading2>;
    },
    [BLOCKS.PARAGRAPH]: (
      node: Record<string, any>,
      children: React.ReactNode
    ) => {
      return <Paragraph> {children} </Paragraph>;
    },
    [INLINES.HYPERLINK]: (
      node: Record<string, any>,
      children: React.ReactNode
    ) => {
      return <HyperLink node={node}> {children} </HyperLink>;
    },
  },
};

export default richtextRenderOptions;

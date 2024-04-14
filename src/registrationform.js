import React from 'react';
import { Tree } from 'react-d3-tree';
import './reg.css';

const DecisionTree = () => {
  const decisionTreeData = {
    name: 'Decision',
    children: [
      {
        name: 'Option 1',
        children: [
          {
            name: 'Outcome A',
            children: [
              {
                name: 'Result 1',
                children: [
                  {
                    name: 'Sub-result 1',
                  },
                  {
                    name: 'Sub-result 2',
                  },
                ],
              },
              {
                name: 'Result 2',
                children: [
                  {
                    name: 'Sub-result 3',
                  },
                  {
                    name: 'Sub-result 4',
                  },
                ],
              },
            ],
          },
          {
            name: 'Outcome B',
            children: [
              {
                name: 'Result 3',
                children: [
                  {
                    name: 'Sub-result 5',
                  },
                  {
                    name: 'Sub-result 6',
                  },
                ],
              },
              {
                name: 'Result 4',
                children: [
                  {
                    name: 'Sub-result 7',
                  },
                  {
                    name: 'Sub-result 8',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Option 2',
        children: [
          {
            name: 'Outcome C',
            children: [
              {
                name: 'Result 5',
                children: [
                  {
                    name: 'Sub-result 9',
                  },
                  {
                    name: 'Sub-result 10',
                  },
                ],
              },
              {
                name: 'Result 6',
                children: [
                  {
                    name: 'Sub-result 11',
                  },
                  {
                    name: 'Sub-result 12',
                  },
                ],
              },
            ],
          },
          {
            name: 'Outcome D',
            children: [
              {
                name: 'Result 7',
                children: [
                  {
                    name: 'Sub-result 13',
                  },
                  {
                    name: 'Sub-result 14',
                  },
                ],
              },
              {
                name: 'Result 8',
                children: [
                  {
                    name: 'Sub-result 15',
                  },
                  {
                    name: 'Sub-result 16',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const containerStyles = {
    width: '100%',
    height: '600px',
  };

  const nodeSize = {
    x: 150,
    y: 100,
  };

  return (
    <div style={containerStyles}>
      <Tree
        data={decisionTreeData}
        orientation="vertical"
        translate={{ x: 300, y: 150 }}
        nodeSize={nodeSize}
        separation={{ siblings: 2, nonSiblings: 2 }}
        pathFunc="step"
        zoom={0.8}
      />
    </div>
  );
};

export default DecisionTree;

import React from 'react';
import { DataView, Header, Split, Box, Tag } from '@aragon/ui';
import 'styled-components/macro';

const Home = () => (
  <div
    css={`
      margin: 0 auto;
      /* padding: 16px; */
    `}
  >
    <Header primary="Home" secondary="HME" />
    <Split
      primary={
        <DataView
          fields={['Name', 'Categories', 'Judge', 'Actions']}
          entries={Array(20).fill({
            name: 'Dynamic Inversion',
            categories: [Math.random()],
            judge: 'UVA',
            actions: 'Add to list',
          })}
          renderEntry={({ name, categories, judge, actions }) => [
            <h2>{name}</h2>,
            categories.map(category => <Tag>{category}</Tag>),
            <h2>{judge}</h2>,
            <h2>{actions}</h2>,
          ]}
        />
      }
      secondary={<Box heading="Your lists">Ya tu sabe</Box>}
    />
  </div>
);

export default Home;

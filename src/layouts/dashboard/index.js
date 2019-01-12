import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Dashboard = ({ children }) => (
  <DashboardWrapper>{children}</DashboardWrapper>
);

Dashboard.propTypes = {
  children: node.isRequired,
};

export default Dashboard;

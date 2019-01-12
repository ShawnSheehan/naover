import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  z-index: 333;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const Dashboard = ({ children }) => (
  <DashboardWrapper>{children}</DashboardWrapper>
);

Dashboard.propTypes = {
  children: node.isRequired,
};

export default Dashboard;

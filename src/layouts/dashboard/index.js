import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  .dashboard-label {
    text-transform: uppercase;
    transform-origin: top left;
    white-space: nowrap;
    font-size: 1.65vh;
    letter-spacing: 0.2em;
    color: #4b6464;
    transform: rotate(-90deg);
    position: absolute;
    left: 29px;
    top: 70%;
  }
`;

const Dashboard = ({ children, filter }) => (
  <DashboardWrapper>
    <div className="dashboard-label">nasa curiosity rover api {filter}</div>
    {children}
  </DashboardWrapper>
);

Dashboard.propTypes = {
  children: node.isRequired,
  filter: string.isRequired,
};

export default Dashboard;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "../components/Header";
import cog from "../static/images/cog.svg";
import YandexButton from "../components/YandexButton";
import { fetchMetrics } from "../redux/actions/settingsActions";

const PerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-self: center;
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  margin-top: 2rem;
`;

const MetricsTable = styled.table`
  border-spacing: 0px;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 15px;
  background-color: transparent; /* Change the background-color of table here */
  text-align: left; /* Change the text-alignment of table here */
`;

const MetricsTableHead = styled.th`
  font-weight: bold;
  border: 1px solid #cccccc; /* Change the border-color of heading here */
  padding: 8px;
`;

const MetricsTableData = styled.td`
  border: 1px solid #cccccc; /* Change the border-color of cells here */
  padding: 8px;
`;

function Performance({ metrics }) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMetrics()), [dispatch]);

  return (
    <PerformanceContainer>
      <Header title={"School CI server"} titleColor={"#7F8285"}>
        <Link to="/settings">
          <YandexButton
            label="Settings"
            isSettings={true}
            isGray={true}
            icon={cog}
          />
        </Link>
      </Header>
      <p>All performance stats will be shown here</p>
      <MetricsContainer>
        <MetricsTable>
          <MetricsTableHead>Name</MetricsTableHead>
          <MetricsTableHead>Type</MetricsTableHead>
          <MetricsTableHead>Value</MetricsTableHead>
          <MetricsTableHead>Metric name</MetricsTableHead>
          <MetricsTableHead>Duration</MetricsTableHead>
          <tbody>
            {metrics.map((metric) => (
              <tr>
                <MetricsTableData>{metric.name}</MetricsTableData>
                <MetricsTableData>
                  {metric.entries[0].entryType}
                </MetricsTableData>
                <MetricsTableData>{metric.value}</MetricsTableData>
                <MetricsTableData>{metric.entries[0].name}</MetricsTableData>
                <MetricsTableData>
                  {metric.entries[0].duration}
                </MetricsTableData>
              </tr>
            ))}
          </tbody>
        </MetricsTable>
      </MetricsContainer>
    </PerformanceContainer>
  );
}

const mapStateToProps = (state) => ({
  metrics: state.settings.metrics,
});

export default connect(mapStateToProps)(Performance);

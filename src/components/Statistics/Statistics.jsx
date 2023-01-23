import PropTypes from 'prop-types';
import { StatisticsText } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <StatisticsText>
      Good: <span>{good}</span>
    </StatisticsText>
    <StatisticsText>
      Neutral: <span>{neutral}</span>
    </StatisticsText>
    <StatisticsText>
      Bad: <span>{bad}</span>
    </StatisticsText>
    <StatisticsText>
      Total: <span>{total}</span>
    </StatisticsText>
    <StatisticsText>
      Positive Percentage: <span>{positivePercentage}</span>%
    </StatisticsText>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
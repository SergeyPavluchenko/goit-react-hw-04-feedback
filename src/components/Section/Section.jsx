import PropTypes from 'prop-types';
import { StyledText } from './Section.styled';


const Section = ({ title, children }) => (
  <section>
    <StyledText>{title}</StyledText>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children }) {
  return (
    <section className={s.section}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
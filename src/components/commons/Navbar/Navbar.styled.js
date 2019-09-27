import styled from 'styled-components';
import Navbar from './Navbar.component';
import * as colors from '../../../static/style/styleVariables';

export default styled(Navbar).attrs({})`
  height: 100vh;
  width: 15vw;
  background-color: ${colors.secondary_alternative};
  color: ${colors.font_primary};
  padding: 2% 3%;
  position: fixed;

  .project {
    line-height: 2rem;
    color: #fff;
  }

  .project_container {
    margin-top: 40%;
  }
`;

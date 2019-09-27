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
  font-family: 'Lato', sans-serif ;
  font-size: 1.5em;

  .project {
    display: block;
    line-height: 2rem;
    font-family: 'Lato', sans-serif ;
    font-size: .7em;
    color: ${colors.font_primary} !important;
    border-bottom: .5px solid ${colors.font_primary};
    transition: all 0.4s ease-out 0s;
  }

  .project:hover {
    font-size: .85em;
  }

  .project_container {
    margin-top: 40%;
    
  }
`;

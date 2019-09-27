import styled from 'styled-components';
import Login from './Login.component';
import * as Colors from '../../../static/style/styleVariables';

export default styled(Login).attrs({})`
margin: auto 200px auto ;
width: 40vw;
height: 40vh;
background-color:  ${Colors.primary}`;

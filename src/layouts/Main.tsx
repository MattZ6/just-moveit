import { FC } from 'react';

import { ThemeProvider } from '../contexts/ThemeContext';

import SideBar from './components/SideBar';
import Footer from './components/Footer';

import { Container, Content } from '../styles/layouts/Main';

const Main: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <Container>
        <SideBar />

        <Content>
          <div>
            <section>{children}</section>

            <Footer />
          </div>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Main;

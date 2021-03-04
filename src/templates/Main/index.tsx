import React, { useContext } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Switch from 'react-switch';
import { FiHome, FiAward } from 'react-icons/fi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, SideBar, LinkButton, Content, Footer, SwitchIconContainer } from './styles';

const Main: React.FC = ({ children }) => {
  const router = useRouter();
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      <SideBar>
        <Link href="/">
          <LinkButton isActive={router.route === '/'}>
            <FiHome size={24} color={router.route === '/' ? theme.primaryColor : theme.text} />
          </LinkButton>
        </Link>

        <Link href="/ranking">
          <LinkButton isActive={router.route === '/ranking'}>
            <FiAward size={24} color={router.route === '/ranking' ? theme.primaryColor : theme.text} />
          </LinkButton>
        </Link>
      </SideBar>

      <Content>
        <div>
          <section>
            { children }
          </section>

          <Footer>
            <Switch
              checked={theme.title === 'dark'}
              onChange={toggleTheme}
              onColor={theme.dividerColor}
              offColor={theme.dividerColor}
              checkedIcon={null}
              uncheckedIcon={null}
              height={24}
              uncheckedHandleIcon={<SwitchIconContainer>🌞</SwitchIconContainer>}
              checkedHandleIcon={<SwitchIconContainer>🌛</SwitchIconContainer>}
              />
          </Footer>
        </div>
      </Content>
    </Container>
  );
}

export default Main;

import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from '@contexts/ThemeContext';

import { Container, SwitchIconContainer } from '@styles/layouts/components/Footer';

const Footer: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
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
    </Container>
  );
}

export default Footer;

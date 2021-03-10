import { FC, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiAward } from 'react-icons/fi';

import { ThemeContext } from '@contexts/ThemeContext';

import { Container, LinkButton } from '@styles/layouts/components/SideBar';

const SideBar: FC = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <Link href="/">
        <LinkButton isActive={router.route === '/'} tabIndex={0}>
          <FiHome
            size={24}
            color={router.route === '/' ? theme.primaryColor : theme.text}
          />
        </LinkButton>
      </Link>

      <Link href="/ranking">
        <LinkButton isActive={router.route === '/ranking'} tabIndex={0}>
          <FiAward
            size={24}
            color={
              router.route === '/ranking' ? theme.primaryColor : theme.text
            }
          />
        </LinkButton>
      </Link>
    </Container>
  );
};

export default SideBar;

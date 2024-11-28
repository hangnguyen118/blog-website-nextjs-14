'use client'

import { useDisclosure } from '@mantine/hooks';
import { Menu, Group, Center, Burger, Container, Avatar, Autocomplete } from '@mantine/core';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import classes from './Header.module.css';
import Link from 'next/link';
import ButtonLink from '../ButtonLink/ButtonLink';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_store/store';

const links = [
  { link: '/blog', label: 'Blog' },
  { link: '/feature', label: 'Features' },
  { link: '/about', label: 'About' },
  {
    link: '#1',
    label: 'Learn',
    links: [
      { link: '/docs', label: 'Documentation' },
      { link: '/resources', label: 'Resources' },
      { link: '/community', label: 'Community' },
      { link: '/blog', label: 'Blog' },
    ],
  },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export default function Header() {
  const currentUser = useSelector((state: RootState) => state.user);
  const [opened, { toggle }] = useDisclosure();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));
    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" size="sm" hiddenFrom="md" />
            <Link href="/"><Avatar h={50} w="auto" alt="WEB_LOGO" src="/assets/icons/logo.png" /></Link>

          </Group>
          <Group gap={5} visibleFrom="md">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch width={16} height={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
          <Group>
            {
              !currentUser.username ? <ButtonLink name='Login' href='/login' style='1'></ButtonLink>
                :
                <Link href="/profile"><Avatar radius='xl' alt="WEB_LOGO" src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${currentUser.image}`} /></Link>
            }
          </Group>
        </div>
      </Container>
    </header>
  );
}
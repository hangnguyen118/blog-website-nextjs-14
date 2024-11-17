"use client"
import { useDisclosure } from '@mantine/hooks';
import { Menu, Group, Center, Burger, Container, Avatar, Autocomplete, Button } from '@mantine/core';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import classes from './Header.module.css';

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
  const [opened, { toggle }] = useDisclosure();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));
    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" size="sm" hiddenFrom="md" />
            <Avatar h={50} w="auto" alt="WEB_LOGO" src="/assets/icons/logo.png" component="a" href='/' />
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
            <Button component="a" href="/login" variant="filled">Login</Button>
          </Group>
        </div>
      </Container>
    </header>
  );
}
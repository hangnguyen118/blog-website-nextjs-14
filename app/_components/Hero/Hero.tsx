import { Container, Title, Text } from '@mantine/core';
import classes from './Hero.module.css';
import ButtonLink from '../ButtonLink/ButtonLink';

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tạo {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Blog
              </Text>{' '}
              Nhanh chóng tiện lợi
            </Title>

            <Text className={classes.description} mt={30} mb={20}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>
            <ButtonLink name='Bắt đầu ngay' href='/create_blog' style='1'></ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
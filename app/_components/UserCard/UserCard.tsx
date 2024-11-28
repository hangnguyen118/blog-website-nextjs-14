import { AuthorInfo } from "@/types"
import { Avatar, Group, Text } from "@mantine/core"
import classes from './style.module.css';
import Link from "next/link";

export default function UserCard({name, status, avatarImage}: AuthorInfo) {
  return (
    <Group wrap="nowrap" className={classes.wrapper}>
      <Avatar
        src={avatarImage}
        size={100}
        radius={120}
        mx="auto"
      ></Avatar>
      <div>
        <Text fz="lg" fw={500} mt="md">{name}</Text>
        <Text c="dimmed" fz="sm">{status}</Text>
        <Link href='/blog' className={classes.linkButton}>View Blog</Link>
      </div>
    </Group>
  )
}

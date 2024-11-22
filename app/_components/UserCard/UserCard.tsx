import { AuthorInfo } from "@/types"
import { Avatar, Button, Group, Text } from "@mantine/core"

export default function UserCard({name, status, avatarImage}: AuthorInfo) {
  return (
    <Group wrap="nowrap">
      <Avatar
        src={avatarImage}
        size={100}
        radius={120}
        mx="auto"
      ></Avatar>
      <div>
        <Text fz="lg" fw={500} mt="md">{name}</Text>
        <Text c="dimmed" fz="sm">{status}</Text>
        <Button variant="default" fullWidth mt="xs">View Blog</Button>
      </div>

    </Group>
  )
}

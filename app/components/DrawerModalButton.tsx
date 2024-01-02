import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { Burger } from '@mantine/core';

export const DrawerModalButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title='Authentication'>
        <h1>Hi threre!</h1>
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
      <Burger opened={opened} onClick={open} />
    </>
  );
};

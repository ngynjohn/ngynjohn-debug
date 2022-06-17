import {
  Header,
  Container,
  Text,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  header: {
    width: '100%',
  },
  container: {
    color: 'red',
  },
}));

export default function Navbar() {
  const { classes } = useStyles();
   return (
     <Header
       className={classes.header}
       height={30}
       mb={120}
     >
      <Container
        className={classes.container}
      >
       <Text>
         Navbar
       </Text>
      </Container>
     </Header>
   );
}

import { Navbar, Text, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.color.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.color.gray[0],
  },
}))

function Nav() {
  return(
    <Navbar className={useStyles.navbar} height={80} position={{ top: 0, left: 0 }}>
          <Text>Home</Text>
    </Navbar>
  )
}

export default Nav;
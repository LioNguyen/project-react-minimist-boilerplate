import { FC } from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <Container className={`app-container ${className}`} {...props}>
      {children}
    </Container>
  );
};

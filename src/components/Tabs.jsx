/* To get and set tag names use PascalCase */
export default function Tabs({ children, buttons, ContainerTag }) {
  return (
    <>
      <ContainerTag>{buttons}</ContainerTag>
      {children}
    </>
  );
}

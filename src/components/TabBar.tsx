import styled from 'styled-components';

export interface Tab {
  key: string;
  label?: string;
  icon?: JSX.Element;
}

const TabBar = ({
  tabs,
  activeTab,
  className,
  onClick,
}: {
  onClick: (value: string) => void;
  tabs: Tab[];
  activeTab: string;
  className?: string;
}) => {
  const handleClick = (tab: Tab) => {
    if (tabs.length > 1 && tab.key) {
      onClick(tab.key);
    }
  };

  return (
    <Container className={className}>
      {tabs?.map((tab) => {
        const isActive = tab.key === activeTab;

        return (
          <TabButton
            key={`${tab.key}`}
            $isActive={isActive}
            onClick={() => {
              handleClick(tab);
            }}
          >
            <Text $isActive={isActive}>{tab.label}</Text>
            {tab.icon}
          </TabButton>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow-x: auto;
`;

const TabButton = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 8px;
  align-items: center;
  height: 40px;
  background: #f7f8fa 0% 0% no-repeat padding-box;
  border-radius: 16px 16px 0px 0px;
  padding: 26px;
  background-color: ${({ $isActive }) => ($isActive ? 'white' : '#F0F4FA')};
  cursor: pointer;
`;

const Text = styled.span<{ $isActive: boolean }>`
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

export default TabBar;

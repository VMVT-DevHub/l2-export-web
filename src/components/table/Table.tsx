import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Columns, NotFoundInfoProps, TableData, device } from '@aplinkosministerija/design-system';
import TableLayout from './TableLayout';
import DesktopTable from './DesktopTable';
import MobileTable from './MobileTable';
import { getActiveColumns } from './functions';

import { useMediaQuery } from 'react-responsive';
import LoaderComponent from '../LoaderComponent';

export interface LoginLayoutProps {
  data?: TableData;
  columns: Columns;
  notFoundInfo: NotFoundInfoProps;
  onClick?: (id: string) => void;
  tableRowStyle?: any;
  pageName?: string;
  isFilterApplied?: boolean;
  loading?: boolean;
}

const Table = ({
  data,
  columns,
  notFoundInfo,
  onClick,
  tableRowStyle,
  pageName,
  loading,
  isFilterApplied = false,
}: LoginLayoutProps) => {
  const isMobile = useMediaQuery({ query: device.mobileL });
  const activeColumns = getActiveColumns(columns);

  if (loading) return <LoaderComponent />;

  return (
    <TableLayout data={data} pageName={pageName} loading={loading}>
      {isMobile ? (
        <MobileTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
        />
      ) : (
        <DesktopTable
          data={data?.data}
          columns={activeColumns}
          onClick={onClick}
          tableRowStyle={tableRowStyle}
          notFoundInfo={notFoundInfo}
          isFilterApplied={isFilterApplied}
        />
      )}
    </TableLayout>
  );
};

export default Table;

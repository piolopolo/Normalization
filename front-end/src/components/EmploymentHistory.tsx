import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface EmploymentHistory {
  employer: string;
  position: string;
  from: string;
  to: string;
}

interface EmploymentHistoryProps {
  histories: EmploymentHistory[];
}

const EmploymentHistory: React.FC<EmploymentHistoryProps> = ({ histories }) => (
  <div>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>Employment</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell sx={{ p: 0 }} />
          <TableCell width="50" sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>From</strong>
            </Typography>
          </TableCell>
          <TableCell width="50" sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>To</strong>
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {histories.map((o, i) => (
          <TableRow key={i}>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="body2">
                <strong>{o.employer}</strong>
              </Typography>
              <Typography variant="caption">{o.position}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.from}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.to}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default EmploymentHistory;

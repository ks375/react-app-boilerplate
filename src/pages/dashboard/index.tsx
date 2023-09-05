import { useState, useCallback } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { BaseButton } from '../../components';
import { useInterval } from '../../hooks';

const DashboardContainer: React.FC = () => {
  const [codeBytes, setCodeBytes] = useState<number>(0);
  const [isCoding, setCoding] = useState<boolean>(false);

  useInterval(
    () => {
      setCodeBytes(codeBytes + 1)
    },
    isCoding ? 100 : null
  );

  const handleTimerButton = useCallback(() => {
    setCoding((state) => !state);
  }, []);

  return (
    <div>
      <Row>
        <Col textAlign='center'>
          <h1>
            A fast and scalable react boilerplate using vite + typescript + zendeskgarden
          </h1>
        </Col>
      </Row>
      <Row>
        <Col textAlign='center'>
          <p>
            {codeBytes} bytes written
          </p>
        </Col>
      </Row>
      <Row>
        <Col textAlign='center'>
          <BaseButton
            isPrimary
            onClick={handleTimerButton}
          >
            {
              isCoding ? 'Stop coding...' : 'Start coding...'
            }
          </BaseButton>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContainer;
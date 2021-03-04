import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-top: 2.5rem;

  > span {
    font-size: 1rem;
  }
`;

export const Progress = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 8px;
  background: ${({ theme }) => theme.dividerColor};
  margin: 0 1.5rem;
  position: relative;
`;

interface ICurrentProgressProps {
  progress: number;
}

export const CurrentProgress = styled.div<ICurrentProgressProps>`
  width: ${props => props.progress}%;
  height: inherit;
  border-radius: inherit;
  background: ${({ theme }) => theme.success};
  transition: all 500ms ease-out;
`;

interface ICurrentProgressIndicatorProps {
  progress: number;
}

export const CurrentProgressIndicator = styled.span<ICurrentProgressIndicatorProps>`
  position: absolute;
  top: 12px;
  left: ${props => props.progress}%;
  transform: translateX(-50%);
  transition: all 500ms ease-out;
`;

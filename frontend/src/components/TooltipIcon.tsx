import { Icon, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  label: string;
  fontSize: string;
  icon: IconType;
  onClick: React.MouseEventHandler<SVGElement>;
};

function TooltipIcon({ label, fontSize, icon, onClick }: Props) {
  return (
    <Tooltip hasArrow label={label}>
      <span>
        <Icon
          fontSize={fontSize}
          as={icon}
          cursor="pointer"
          onClick={onClick}
          tabIndex={0}
        />
      </span>
    </Tooltip>
  );
}

export default TooltipIcon;

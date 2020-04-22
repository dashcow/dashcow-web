import React from 'react';
import { Button, PageHeader } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { PageHeaderProps } from 'antd/lib/page-header';

interface PageTitleProps {
  title: PageHeaderProps['title'];
  breadcrumb?: PageHeaderProps['breadcrumb'];
  primaryButton?: TitleButtonProps;
  secondaryButtons?: TitleButtonProps[];
}

interface TitleButtonProps {
  text: string;
  onClick?: ButtonProps['onClick'];
  icon?: ButtonProps['icon'];
  loading?: ButtonProps['loading'];
  disabled?: ButtonProps['disabled'];
}

interface TitleButtonGroupProps {
  buttons: TitleButtonProps[];
}

const PrimaryButton: React.FC<TitleButtonProps> = ({ text, ...attrs }) => (
  <Button type="primary" {...attrs}>
    {text}
  </Button>
);

const SecondaryButtonGroup: React.FC<TitleButtonGroupProps> = props => (
  <span>
    <Button.Group>
      {props.buttons.map(({ text, ...attrs }, index) => (
        <Button key={index} {...attrs}>
          {text}
        </Button>
      ))}
    </Button.Group>
  </span>
);

const PageTitle: React.FC<PageTitleProps> = ({
  primaryButton,
  secondaryButtons,
  ...headerAttrs
}) => (
  <PageHeader
    {...headerAttrs}
    extra={[
      secondaryButtons && (
        <SecondaryButtonGroup
          key="1"
          buttons={secondaryButtons}
        ></SecondaryButtonGroup>
      ),
      primaryButton && (
        <PrimaryButton key="2" {...primaryButton}></PrimaryButton>
      ),
    ]}
  ></PageHeader>
);

export default PageTitle;

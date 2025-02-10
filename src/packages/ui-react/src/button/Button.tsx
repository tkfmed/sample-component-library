type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger" | "link";

type Props = {
    variant: ButtonVariant;
}

export const Button: React.FC<Props> = ({variant}) => {
    return <button>{`Click me! ${variant}`}</button>
}
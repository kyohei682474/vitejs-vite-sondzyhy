export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
      <div>
        <img height={160} width={160} src={image} alt="プロフィール" />
        <p>{name}</p>
      </div>
    );
  };
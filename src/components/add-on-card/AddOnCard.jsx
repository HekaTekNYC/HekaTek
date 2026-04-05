import "./add-on-card.scss"

const AddOnCard = ({className, title, desc}) => {
  return (
    <>
      <div className={`add-on-card ${className}`}>
        <div className="add-on-card-header header-text">
          <p className={`add-on-title ${className}`}>{title}</p>
          <div className="add-on-white-line"></div>
          <p className="add-on-desc">{desc}</p>
        </div>
      </div>
    </>
  )
}

export default AddOnCard

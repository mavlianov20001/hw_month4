import css from './Text.module.css'





 export const Text = (props) => {
     return (
          <div className={css.div}>
               {props.text}
          </div>
     )
}

// export default Text
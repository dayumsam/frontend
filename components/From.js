import styles from '../styles/Home.module.scss'

export default function Form({handleClick, data}){
    return(
        <>
            <div className={styles.titletext}>
            Tell us about the styles that excite you!
            </div>

            <form className={styles.imageselection}>
                <div className={styles.gridcontainer}>
                        {data.map((image) => 
                            <div className={styles.gridimage} key={image.fileId} style={{backgroundImage: `url(${image.url})`}}>
                                <input type="checkbox" id={image.fileId} className={styles.imageselector} value={image.tags} data-id={image.fileId} onClick={handleClick}/>
                                <label htmlFor={image.fileId} className={styles.label}/>
                            </div>
                        )}
                </div>
            </form> 
        </> 
    )
}
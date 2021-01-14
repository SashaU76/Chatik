import { Container, Grid} from "@material-ui/core";
import classes from './Loader.module.css'



const Loader = () => {
    
    return (
        <Container>
            <Grid container style={{height: window.innerHeight -90}}
            alignItems={'center'}
            justify={'center'}
            >
                <Grid 
                container
                alignItems={'center'}
                direction={'column'}>
                    <div className={classes.center}><div className={classes.Loader2}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
      );
}
 
export default Loader;
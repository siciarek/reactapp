import React from 'react'
import PropTypes from 'prop-types'
import MobileStepper from 'material-ui/MobileStepper'
import {grey} from 'material-ui/colors'
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  info: {
    textAlign: 'center',
    color: grey[600],
    paddingTop: 6,
  }
})

class Pager extends React.Component {

  render() {

    const {page, totalPages, handleNext, handleBack, classes} = this.props

    return <div>
      <MobileStepper
        type="progress"
        position="static"
        className={classes.mobileStepper}
        activeStep={page}
        steps={totalPages}
        onBack={handleBack}
        onNext={handleNext}
        disableBack={page <= 1}
        disableNext={totalPages > 0 && page >= totalPages}
      />
      <Typography className={classes.info}>
        Page {page} of {totalPages}
      </Typography>
    </div>
  }
}

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

Pager.defaultProps = {
  page: 1,
  totalPages: -1,
  handleNext: () => {
  },
  handleBack: () => {
  },
}

export default withStyles(styles)(Pager)
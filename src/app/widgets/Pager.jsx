import React from 'react'
import PropTypes from 'prop-types'
import MobileStepper from 'material-ui/MobileStepper'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

})

class Pager extends React.Component {

  render() {

    const {page, totalPages, handleNext, handleBack, classes} = this.props

    return <MobileStepper
      type="text"
      position="static"
      className={classes.mobileStepper}
      activeStep={page}
      steps={totalPages}
      onBack={handleBack}
      onNext={handleNext}
      disableBack={page <= 1}
      disableNext={totalPages > 0 && page >= totalPages}
    />
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
  handleNext: () => {},
  handleBack: () => {},
}

export default withStyles(styles)(Pager)
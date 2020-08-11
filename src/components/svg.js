import React from 'react'

import ResearchIcon from '../images/icons/v2/research.svg'
import StrategyIcon from '../images/icons/v2/startup.svg'
import DesignIcon from '../images/icons/v2/design-tool.svg'
import DevelopIcon from '../images/icons/v2/devops.svg'
import MaintenanceIcon from '../images/icons/v2/settings.svg'
import UxIcon from '../images/icons/v2/users.svg'
import IaIcon from '../images/icons/v2/hierarchy.svg'
import TrackingIcon from '../images/icons/v2/analytics.svg'
import CmsIcon from '../images/icons/v2/test.svg'
import MobileIcon from '../images/icons/v2/content.svg'
import TechnicalStrategyIcon from '../images/icons/v2/rocket.svg'
import PrintIcon from '../images/icons/v2/study.svg'
import LogoIcon from '../images/icons/v2/logo.svg'
import SocialIcon from '../images/icons/v2/social-media.svg'

class SVG extends React.Component  {
    render() {
        const Element = {
            research: ResearchIcon,
            strategy: StrategyIcon,
            design: DesignIcon,
            develop: DevelopIcon,
            maintenance: MaintenanceIcon,
            ux: UxIcon,
            ia: IaIcon,
            tracking: TrackingIcon,
            cms: CmsIcon,
            mobile: MobileIcon,
            technical_strategy: TechnicalStrategyIcon,
            print: PrintIcon,
            logo: LogoIcon,
            social: SocialIcon
        }[this.props.image];

        return (
            <Element/>
        );
    }
}


export default SVG

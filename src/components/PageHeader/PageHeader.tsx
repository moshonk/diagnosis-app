import { HeaderContainer, Header, SkipToContent, HeaderMenuButton, HeaderName, HeaderGlobalBar } from 'carbon-components-react';
import classes from './page-header.module.css';

export interface PageHeaderProps { }

const PageHeader: React.VFC<PageHeaderProps> = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Carbon Tutorial">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="Practicals">
					Diagnosis App
				</HeaderName>
				<HeaderGlobalBar />
			</Header>
		)}
	/>
)

export default PageHeader
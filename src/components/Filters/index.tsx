import * as React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useFetchPlatforms } from "../../hooks/useFetchPlatforms";

// CSS
import { FiltersNav, FiltersNavItem } from "../../styles/FiltersStyles";

type FiltersProps = {
	currentFilter: string;
	onFilterList: (string) => void;
};

const Filters = React.memo(({ currentFilter, onFilterList }: FiltersProps) => {
	const [{ loading, error, platforms }] = useFetchPlatforms();

	// Block to create new Array adding "All" option filter
	const [filters, setFilters] = React.useState([]);

	React.useEffect(() => {
		setFilters(["All", ...platforms]);
	}, [platforms]);

	// Set new Filter to render list of games
	const setNewFilter = (selectedPlatform: string): void => {
		onFilterList(selectedPlatform);
	};

	// Show UI active filter
	const activeClass = (selectedPlatform: string) => {
		if (currentFilter === selectedPlatform) {
			return "active";
		}
	};

	const [skeletonLoading, isSkeletonLoading] = React.useState(true);
	React.useEffect(() => {
		if (loading) {
			isSkeletonLoading(false);
		}
	}, [loading]);

	if (skeletonLoading) {
		const arr = [1, 2, 3, 4];

		return (
			<FiltersNav>
				<SkeletonTheme color="#333" highlightColor="#C4C4C4">
					{arr.map(index => (
						<Skeleton
							key={`skeleton_${index}`}
							height={30}
							width={60}
							style={{ marginRight: "1rem" }}
						/>
					))}
				</SkeletonTheme>
			</FiltersNav>
		);
	}

	if (error) {
		return (
			<div className="center">
				<p>{error}</p>
			</div>
		);
	}

	return (
		<FiltersNav>
			{filters?.map(filter => (
				<FiltersNavItem
					key={filter}
					className={`${activeClass(filter)}`}
					onClick={() => setNewFilter(filter)}
				>
					{filter}
				</FiltersNavItem>
			))}
		</FiltersNav>
	);
});

export default Filters;

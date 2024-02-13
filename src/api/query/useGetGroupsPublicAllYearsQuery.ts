import { useSuspenseQuery } from '@tanstack/react-query';
import QUERY_KEY from '@api/constants/queryKey.ts';
import { getGroupsPublicAllYears } from '@api/api/groups.ts';

const useGetGroupsPublicAllYearsQuery= () => {
  return useSuspenseQuery({
    queryFn: getGroupsPublicAllYears,
    queryKey: QUERY_KEY.GROUPS,
  });
};

export default useGetGroupsPublicAllYearsQuery;

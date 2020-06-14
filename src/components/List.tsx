import * as React from 'react';
import {ChevronRight, Search} from 'baseui/icon';
import {StatefulMenu} from 'baseui/menu';
import {
  ListItemLabel,
  MenuAdapter,
  ARTWORK_SIZES,
} from 'baseui/list';
const ITEMS = Array.from({length: 10}, () => ({
  title: 'Jane Smith',
  subtitle: 'Senior Engineering Manager',
}));
const List = () => {
  return (
    <StatefulMenu
      items={ITEMS}
      onItemSelect={() => console.log('select')}
      overrides={{
        List: {
          style: {
            //height: '300px'
          },
        },
        Option: {
          props: {
            overrides: {
              ListItem: {
                component: React.forwardRef((props: any, ref) => (
                  <MenuAdapter
                    {...props}
                    ref={ref}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight />}
                  >
                    <ListItemLabel
                      description={props.item.subtitle}
                    >
                      {props.item.title}
                    </ListItemLabel>
                  </MenuAdapter>
                )),
              },
            },
          },
        },
      }}
    />
  );
};

export default List
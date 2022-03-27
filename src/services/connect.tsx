import React, { useCallback, forwardRef } from 'react';
import { Dispatch } from 'redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from 'app/entities/store';

export const connect = <T extends { actions: {} }>(
  containerName: string,
  mapStateToProps: (state: IRootState) => Omit<T, 'actions'>,
  mapDispatchToProps: (dispatch: Dispatch) => T['actions']
) => WrappedComponent => {
  const Wrapper = (props, ref) => {
    const dispatch = useDispatch();
    const state = useSelector(useCallback(mapStateToProps, []));

    const provideProps = {
      ...props,
      [containerName]: {
        ...state,
        actions: mapDispatchToProps(dispatch)
      }
    };

    return <WrappedComponent ref={ ref } { ...provideProps } />;
  };
  return hoistNonReactStatics(forwardRef(Wrapper), WrappedComponent);
};

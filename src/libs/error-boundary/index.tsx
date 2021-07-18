import React, { ErrorInfo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface ErrorBoundaryWrapperPropsType {
  style?: StyleProp<ViewStyle>;
  fallback?: React.ReactNode | null;
  componentDidCatch?: (error: Error, info: ErrorInfo) => void;
}
interface ErrorBoundaryWrapperStateType {
  hasError: boolean
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryWrapperPropsType, ErrorBoundaryWrapperStateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props?.componentDidCatch && this.props.componentDidCatch(error, errorInfo);
  }


  render() {
    if (this.state.hasError) {
      return (
        <View style={this.props.style}>
          {
            this.props.fallback
          }
        </View>
      );
    }

    return this.props.children;
  }
}
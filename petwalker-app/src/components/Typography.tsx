import { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors, typography } from '../theme';

interface TextProps {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle;
  numberOfLines?: number;
}

export function Heading({ children, align = 'left', style, numberOfLines }: TextProps) {
  return (
    <Text style={[styles.heading, { textAlign: align }, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export function Subheading({ children, align = 'left', style, numberOfLines }: TextProps) {
  return (
    <Text style={[styles.subheading, { textAlign: align }, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export function Body({ children, align = 'left', style, numberOfLines }: TextProps) {
  return (
    <Text style={[styles.body, { textAlign: align }, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export function Caption({ children, align = 'left', style, numberOfLines }: TextProps) {
  return (
    <Text style={[styles.caption, { textAlign: align }, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '600',
  },
  subheading: {
    color: colors.text,
    fontSize: typography.subheading,
    fontWeight: '500',
  },
  body: {
    color: colors.text,
    fontSize: typography.body,
  },
  caption: {
    color: colors.muted,
    fontSize: typography.caption,
  },
});

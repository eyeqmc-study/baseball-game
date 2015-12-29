package com.eyeq.jhs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Hana Lee
 * @since 2015-12-23 22:37
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	private String id;
	private Role role;
}